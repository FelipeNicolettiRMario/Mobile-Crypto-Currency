import Axios from 'axios';

export default Axios.create({
    baseURL:'https://api.cryptonator.com/api/ticker/'
});