declare module ws {
  var Server:Server;
  export interface Server {
    new(options: Object);
    on(event: string, handler: Function)
    broadcast: Function;
    clients:Array<Client>;
    options: ServerOptions;
  }
  export interface ServerOptions {
    host: string;
    port: string;
  }
  interface Client {
    send(data: string);
  }
}
declare module "ws" {
  export = ws;
}