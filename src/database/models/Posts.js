import AbstractModel from "../AbstractModel";
class PostModel extends AbstractModel {
    type = 'postData';
    constructor(){
        super()    
    }
    create(data){

        if (data.autorId) {
            let sameUser = Object.values(this.getAll()).filter((user)=> data.autorId === user.autorId);
            if (sameUser.length) {
                throw new ValidationError('Current email already exist');
            }
        }

        return super.create(data);
    }

}
export default PostModel;