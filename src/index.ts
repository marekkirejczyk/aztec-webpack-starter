
import {createPXEClient, waitForSandbox,} from '@aztec/aztec.js';

const PXE_URL = 'http://localhost:8080';

async function component() {
    const element = document.createElement('div');
    const pxe = createPXEClient(PXE_URL);
    await waitForSandbox(pxe);
    const nodeInfo = await pxe.getNodeInfo();
    element.innerHTML = JSON.stringify(nodeInfo);
    return element;
}

component().then((component) => {
    document.body.appendChild(component);
});
