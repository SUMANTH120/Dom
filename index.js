// Task 1: Create a Paragraph with Text
function task1() {
    const paragraph = document.createElement('p');
    paragraph.innerText = "Since the early 20th century, tiger populations have lost at least 93% of their historic range and are locally extinct in West and Central Asia, in large areas of China and on the islands of Java and Bali.";
    document.body.appendChild(paragraph);
}

// Task 2: Create a Div with Two Headings
function task2() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    
    h1.innerText = "Main Heading";
    h2.innerText = "Subheading";
    
    div.appendChild(h1);
    div.appendChild(h2);
    document.body.appendChild(div);
}

// Task 3: Create an Unordered List with Three Items
function task3() {
    const ul = document.createElement('ul');
    const items = ["Item 1", "Item 2", "Item 3"];
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    });
    
    document.body.appendChild(ul);
}

// Task 4: Create a Table with 2 Rows and 2 Columns
function task4() {
    const table = document.createElement('table');
    const rows = [["Cell 1", "Cell 2"], ["Cell 3", "Cell 4"]];
    
    rows.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const cell = document.createElement('td');
            cell.innerText = cellData;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
    
    document.body.appendChild(table);
}

// Task 5: Create a Div with an Image and Caption
function task5() {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const caption = document.createElement('p');
    
    img.src = "data:image/jpeg;base64,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";
    img.alt = "Placeholder Image";
    caption.innerText = "Tiger is resting.";
    
    div.appendChild(img);
    div.appendChild(caption);
    document.body.appendChild(div);
}

// Task 6: Create a Nested Ordered List
function task6() {
    const ol = document.createElement('ol');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const nestedOl = document.createElement('ol');
    const nestedLi1 = document.createElement('li');
    const nestedLi2 = document.createElement('li');
    
    li1.innerText = "Item 1";
    li2.innerText = "Item 2";
    nestedLi1.innerText = "Nested Item 1";
    nestedLi2.innerText = "Nested Item 2";
    
    nestedOl.appendChild(nestedLi1);
    nestedOl.appendChild(nestedLi2);
    li2.appendChild(nestedOl);
    ol.appendChild(li1);
    ol.appendChild(li2);
    
    document.body.appendChild(ol);
}

// Task 7: Create a Section with a Heading and Paragraph
function task7() {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    const paragraph = document.createElement('p');
    
    h2.innerText = "Section Heading";
    paragraph.innerText = "This is a paragraph inside the section.";
    
    section.appendChild(h2);
    section.appendChild(paragraph);
    document.body.appendChild(section);
}

// Task 8: Create a Description List
function task8() {
    const dl = document.createElement('dl');
    const terms = [
        { term: "JavaScript", description: "A programming language." },
        { term: "HTML", description: "The structure of web pages." },
        { term: "CSS", description: "Used for styling web pages." }
    ];
    
    terms.forEach(item => {
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        
        dt.innerText = item.term;
        dd.innerText = item.description;
        
        dl.appendChild(dt);
        dl.appendChild(dd);
    });
    
    document.body.appendChild(dl);
}

// Task 9: Create a Blockquote Inside a Div
function task9() {
    const div = document.createElement('div');
    const blockquote = document.createElement('blockquote');
    
    blockquote.innerText = "This is a blockquote inside a div.";
    div.appendChild(blockquote);
    document.body.appendChild(div);
}

// Task 10: Create a Div with Multiple Paragraphs
function task10() {
    const div = document.createElement('div');
    const paragraphs = [
        "This is the first paragraph.",
        "This is the second paragraph.",
        "This is the third paragraph."
    ];
    
    paragraphs.forEach(text => {
        const p = document.createElement('p');
        p.innerText = text;
        div.appendChild(p);
    });
    
    document.body.appendChild(div);
}
