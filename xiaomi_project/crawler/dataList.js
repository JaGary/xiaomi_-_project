const https = require('https');
const {
    insert
} = require('./db')
https.get('https://m.mi.com/v1/home/page', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        // let listData = JSON.parse(rawData)[0].entries
        console.log(JSON.parse(rawData).data)
        // listData.forEach(element => {
        //     console.log(element.name)
        //     insert('alnav', [{
        //         name: element.name
        //     }])
        // });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});