
let brand = document.getElementById('brand');
let model = document.getElementById('model');
let result = document.getElementById('result');

function search(){
    var object = a.mobiles[brand.value][model.value]
    
    if(object == undefined){
        result.innerHTML = `<h1>Data Not Found</h1>`
    }else{
        result.innerHTML = `<ul>
        <li>Name: ${object.name}</li>
        <li>Ram: ${object.ram}</li>
        <li>Rom: ${object.rom}</li>
        <li>Camera: ${object.camera}</li>
        <li>Price: ${object.price}</li>
    </ul>`
    }
}


var a = {
    mobiles:{
        Samsung:{
            SamsungA10:{
                name:"A10",
                ram:"4gb",
                rom:"64gb",
                camera:"13px",
                price:"22,000 PKR"
            },
            SamsungA20:{
                name:"A20",
                ram:"4gb",
                rom:"64gb",
                camera:"18px",
                price:"28,000"
            },
            SamsungA30:{
                name:"A30",
                ram:"4gb",
                rom:"64gb",
                camera:"25px",
                price:"29,000"
            }
        },
        Iphone:{
            Iphone11:{
                name:"Iphone11",
                ram:"4gb",
                rom:"64gb",
                camera:"12px",
                price:"100,000"
            },
            Iphone12:{
                name:"Iphone12",
                ram:"4gb",
                rom:"64gb",
                camera:"12px",
                price:"150,000"
            },
            Iphone13:{
                name:"Iphone13",
                ram:"6gb",
                rom:"128gb",
                camera:"24px",
                price:"200,000"
            }
        },
        Realme:{
            RealmeC2:{
                name:"RealmeC2",
                ram:"3gb",
                rom:"32gb",
                camera:"8px",
                price:"15,000"
            },
            RealmeC3:{
                name:"RealmeC3",
                ram:"3gb",
                rom:"64gb",
                camera:"13px",
                price:"20,000"
            },
            RealmeX60:{
                name:"RealmeX60",
                ram:"6gb",
                rom:"64gb",
                camera:"64px",
                price:"70,000"
            }
        },
        SharpAquos:{
            AquosR1:{
                name:"AquosR1",
                ram:"3gb",
                rom:"32gb",
                camera:"13px",
                price:"12,000"
            },
            AquosR2:{
                name:"AquosR2",
                ram:"4gb",
                rom:"64gb",
                camera:"22px",
                price:"15,000"
            },
            AquosR3:{
                name:"AquosR3",
                ram:"6gb",
                rom:"128gb",
                camera:"12px",
                price:"21,000"
            }
        },
        Oppo:{
            OppoV20:{
                name:"OppoV20",
                ram:"8gb",
                rom:"128gb",
                camera:"64px",
                price:"54,999"
            },
            OppoF19:{
                name:"OppoF19",
                ram:"6gb",
                rom:"128gb",
                camera:"48px",
                price:"36,999"
            },
            OppoF11:{
                name:"OppoF11",
                ram:"4gb",
                rom:"64gb",
                camera:"48px",
                price:"35,999"
            }
        },
        Vivo:{
            VivoY20:{
                name:"VivoY20",
                ram:"4gb",
                rom:"64gb",
                camera:"13px",
                price:"26,999"
            },
            VivoY21:{
                name:"VivoY21",
                ram:"4gb",
                rom:"64gb",
                camera:"13px",
                price:"43,999"
            },
            VivoY55:{
                name:"VivoY55",
                ram:"8gb",
                rom:"128gb",
                camera:"50px",
                price:"64,999"
            }
        }
    }
}