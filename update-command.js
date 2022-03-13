import fetch from 'node-fetch';
import fs from 'fs';

function extractList(googleAddrData) {
  return googleAddrData.prefixes
    .map(({ ipv4Prefix }) => ipv4Prefix)
    .filter(value => value != undefined)
    .filter((addr) => !addr.startsWith('8.8'))
}

const googleAddrData = await (await fetch('https://www.gstatic.com/ipranges/goog.json')).json();

const googleAddrList = extractList(googleAddrData);

let command = '/ip firewall\n';

googleAddrList.forEach((addr) => {
  command += `address-list add list=google address=${addr}\n`;
});

fs.writeFile('command.txt', command, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('File "command.txt" updated successfully.');
  }
});
