import { createServer, Factory, Model, Response } from 'miragejs';
const { faker } = require('@faker-js/faker');

type User = {
    name: string;
    email : string;
    create_at: string;
}

export function MakeServer(){
    const server = createServer({
        models: {
            user : Model.extend<Partial <User>>({})
        },
        
        factories : {
            user: Factory.extend({
                name(index: number){
                    return 'Marcelo Gomes ' + (index + 1)
                },
                email(){
                    return faker.internet.email().toLowerCase();
                },
                createAt(){
                    return faker.date.recent(10)
                },
            }
            )
        },

        seeds(server){
            server.createList("user", 20);
        },
        
        routes(){
            this.namespace = 'api';
            this.timing = 750;

            this.get("/users", function (schema, request){
                const { page = 1, per_page = 10 } = request.queryParams;

                const total = schema.all('user').length
                const pageStart = (Number(page) - 1) * Number(per_page);
                const pageEnd = pageStart + Number(per_page);

                const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);

                return new Response(
                    200,
                    {'x-total-count': String(total)},
                    { users }
                )

            })

            this.post("/users");

            this.namespace = '';
            this.passthrough();
        }
    })

    return server
}