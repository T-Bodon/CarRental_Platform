export default class User {
    constructor(username, password, name, role, token, id, dr_lic_no, zipcode, phone_no, ins_po_no) {
        this.username = username;
        this.password= password;
        this.name = name;
        this.role = role;
        this.token = token;
        this.id = id;
        this.dr_lic_no = dr_lic_no;
        this.zipcode = zipcode;
        this.phone_no = phone_no;
        this.ins_po_no = ins_po_no;
    }
}
