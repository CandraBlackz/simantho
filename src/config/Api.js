import axios from 'axios';
import { WS_URL } from './config';

export default axios.create({
	baseURL: WS_URL,
	mode: 'cors',
});
