import { c } from '../../../index.js';
import { o } from '../../../create.js';
import { n } from '../../../util.js';
import '../../../index2.js';
import '../../../transframe-provider.js';

const i=[];c.onChange((({value:e})=>{i.forEach((r=>r(e)));}));o({namespace:"truffle-injected-api-v1",api:{pageInfoGet:(r,t)=>(t&&i.push(t),c.get())},strictMode:!0}).registerFrame(n(window));
