import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getMahasiswa = () => GetAPI("posts?_sort=id&_order=desc");
const postMahasiswa = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteMahasiswa = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const API = {
    getMahasiswa,
    postMahasiswa,
    deleteMahasiswa
}

export default API;