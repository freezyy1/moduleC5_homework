// JSON для парсинга
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

// Парсинг JSON
const jsonData = JSON.parse(jsonString);

// Обработка поля age
persons = jsonData.list;
console.log(jsonData);
console.log(persons)





// XML

// XML для парсинга
const parser = new DOMParser();
const xmlString = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
`;

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

// Ноды DOM
const nameNode = xmlDOM.querySelector('name');
const firstNode = xmlDOM.querySelector('first');
const secondNode = xmlDOM.querySelector('second');
const ageNode = xmlDOM.querySelector('age');
const profNode = xmlDOM.querySelector('prof');

// Атрибуты
const langAttr = nameNode.getAttribute('lang');

// JS-объект
const personalInfo = {
    name: `${firstNode.textContent} ${secondNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
};

console.log(personalInfo);