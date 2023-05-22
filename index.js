const sumbitButton = document.getElementById('subButton')
const ul = document.getElementById('ul');
const url = "https://crudcrud.com/api/b575b37b158c49a2a5e795ff3cbc1e9b/info/";

sumbitButton.addEventListener('click',addDataToUI)
//ul.addEventListener('click',deleteFromUI)

function addDataToUI(e)
{
    e.preventDefault();
    const itemName = document.getElementById('autoSizingInputName').value;
    const descName = document.getElementById('autoSizingInput').value;
    const amount = document.getElementById('autoSizingInputGroup').value;
    const quantity = document.getElementById('autoSizingInputGroupQuan').value;

            let node = document.createElement('li');
            const button1 = document.createElement('button')
            const button2 = document.createElement('button')
            const button3 = document.createElement('button')
            button1.className='update1'
            button2.className='update2'
            button3.className='update3'
            button1.textContent='Buy1'
            button2.textContent='Buy2'
            button3.textContent='Buy3'
            button1.setAttribute('style',"background-color: blueviolet")
            button2.setAttribute('style',"background-color: blueviolet")
            button3.setAttribute('style',"background-color: blueviolet")
            node.textContent=`${itemName} ${descName} ${amount} ${quantity} `
            node.appendChild(button1);
            node.appendChild(button2);
            node.appendChild(button3);
            ul.appendChild(node)

    axios.post(url,{itemName,descName,amount,quantity})
    .then(res=>{console.log("saved")})
    .catch(e=>{console.log("error in saving details")})
}

window.addEventListener('DOMContentLoaded',display)

function display(e)
{
    axios.get(url)
    .then(res=>{
        res.data.forEach(x=> {
            let itemNameCC = x['itemName']
            let descNameCC = x['descName']
            let amountCC= x['amount']
            let quantityCC = x['quantity']
            let node = document.createElement('li');
            const button1 = document.createElement('button')
            const button2 = document.createElement('button')
            const button3 = document.createElement('button')
            button1.className='update1'
            button2.className='update2'
            button3.className='update3'
            button1.textContent='Buy1'
            button2.textContent='Buy2'
            button3.textContent='Buy3'
            button1.setAttribute('style',"background-color: blueviolet")
            button2.setAttribute('style',"background-color: blueviolet")
            button3.setAttribute('style',"background-color: blueviolet")
            node.textContent=`${itemNameCC} ${descNameCC} ${amountCC} ${quantityCC} `
            node.appendChild(button1);
            node.appendChild(button2);
            node.appendChild(button3);
            ul.appendChild(node)
        });
    })
    .catch(e=>{console.log("error in loading dom")})
}

ul.addEventListener('click',updateQTY)

function updateQTY(e)
{
    if(e.target.className=='update1')
    {  
        e.preventDefault();
        let pn = e.target.parentNode;
        let tc = String(pn.textContent)
        tc=tc.split(" ");
        let finalQTY = tc[3]-1;

        let search=tc[0];
        let idSearch;
        axios.get(url)
        .then(res=>{
            res.data.forEach((x)=>{
                if(x['itemName']==search)
                idSearch=x['_id']
            })
            axios.put(url+`${idSearch}`,{
                "itemName":tc[0],
                "descName":tc[1],
                "amount":tc[2],
                "quantity":finalQTY
            })
        })
        .catch(e=>{console.log('update unsuccessful ')})
        ul.innerHTML="<h5> Please refresh to see updated changes in QTY </h5>"
        display()
    

        
    }
    else if(e.target.className=='update2')
    {

        e.preventDefault();
        let pn = e.target.parentNode;
        let tc = String(pn.textContent)
        tc=tc.split(" ");
        let finalQTY = tc[3]-2;

        let search=tc[0];
        let idSearch;
        axios.get(url)
        .then(res=>{
            res.data.forEach((x)=>{
                if(x['itemName']==search)
                idSearch=x['_id']
            })
            axios.put(url+`${idSearch}`,{
                "itemName":tc[0],
                "descName":tc[1],
                "amount":tc[2],
                "quantity":finalQTY
            })
        })
        .catch(e=>{console.log('update unsuccessful ')})
        ul.innerHTML="<h5> Please refresh to see updated changes in QTY </h5>"
        display()


    }
    else if(e.target.className=='update3')
    {

        e.preventDefault();
        let pn = e.target.parentNode;
        let tc = String(pn.textContent)
        tc=tc.split(" ");
        let finalQTY = tc[3]-3;

        let search=tc[0];
        let idSearch;
        axios.get(url)
        .then(res=>{
            res.data.forEach((x)=>{
                if(x['itemName']==search)
                idSearch=x['_id']
            })
            axios.put(url+`${idSearch}`,{
                "itemName":tc[0],
                "descName":tc[1],
                "amount":tc[2],
                "quantity":finalQTY
            })
        })
        .catch(e=>{console.log('update unsuccessful ')})
        ul.innerHTML="<h5> Please refresh to see updated changes in QTY </h5>"
        display()

    }
}