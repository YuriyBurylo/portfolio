class User {
    constructor (username, password) {
        this.username = username;
        this.password = password;
    }
    validatePassword() {
        if (this.password.toString().length > 5) {
            return true
        }
        return false
    }
}