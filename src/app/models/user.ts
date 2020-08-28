export class User {
    constructor(
       
        public nombre: string,
        public apellido: string,
        public usuario: string,
        public email: string,
        public password: string,
        public role_id: number,
        public created_at: string,
        public updated_at: string,
        public id: number,
    ) { }
}