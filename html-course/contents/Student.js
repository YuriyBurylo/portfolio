class Student extends User {
    constructor (username, password, nickname) {
        super(username, password);
        this.nickname = nickname;
    }
    getCourses () {
        return ['Math', 'Physics', 'Chemistry']
    }
    validatePassword () {
        if (this.password.toString().length > 10) {
            return true
        }
        return false
    }
}