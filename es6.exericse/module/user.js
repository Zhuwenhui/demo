import { url } from './config'
import slug from 'slug'
import md5 from 'md5'

export default function User(name, email) {
    return {
        name,
        email
    }
}

export function createURL (name){
    return `${name}/usr/${name}`
}


//倒出头像
export function gravatr(email){
    return `https://www.baidu.com/avatar/${md5(email)}`;
}

