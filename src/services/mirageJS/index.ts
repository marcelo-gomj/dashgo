import { createServer, Factory, Model } from 'miragejs';
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

            this.get("/users");
            this.post("/users");

            this.namespace = '';
            this.passthrough();
        }
    })

    return server
}