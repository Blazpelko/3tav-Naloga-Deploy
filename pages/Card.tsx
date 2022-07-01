import { useState, useEffect } from "react";
import { Button, Card } from "semantic-ui-react";

const elementi = [
  { id: "Izdelek 1", value: "Opis izdelka 1", cena: 4 },
  { id: "Izdelek 2", value: "Opis izdelka 2", cena: 2 },
  { id: "Izdelek 3", value: "Opis izdelka 3", cena: 4 },
  { id: "Izdelek 4", value: "Opis izdelka 4", cena: 12 },
  { id: "Izdelek 5", value: "Opis izdelka 5", cena: 6 },
  { id: "Izdelek 6", value: "Opis izdelka 6", cena: 3 },
  { id: "Izdelek 7", value: "Opis izdelka 7", cena: 6 },
  { id: "Izdelek 8", value: "Opis izdelka 8", cena: 3 },
  { id: "Izdelek 9", value: "Opis izdelka 9", cena: 3 },
  { id: "Izdelek 10", value: "Opis izdelka 10", cena: 3 },
  { id: "Izdelek 11", value: "Opis izdelka 11", cena: 3 },
  { id: "Izdelek 12", value: "Opis izdelka 12", cena: 3 },
  { id: "Izdelek 13", value: "Opis izdelka 13", cena: 3 },
  { id: "Izdelek 14", value: "Opis izdelka 14", cena: 3 },
  { id: "Izdelek 15", value: "Opis izdelka 15", cena: 3 },
  { id: "Izdelek 16", value: "Opis izdelka 16", cena: 3 },
  { id: "Izdelek 17", value: "Opis izdelka 17", cena: 3 },
  { id: "Izdelek 18", value: "Opis izdelka 18", cena: 3 }
];

const CreateCard = ({ childToParent }) => {
  const [items, setItems] = useState([]);
  
  function addItem(element) {
    // setItems([...items,element]);
    if(items.length>0){
      // let iskani=_.find(items, function(o) { return o.product.id===element.id;});
      let objIndex = items.findIndex((obj => obj.product.id === element.id));
      if(objIndex===-1){
        setItems([...items,{product:element,st:1}]);
      }else{
        items[objIndex].st=items[objIndex].st+1;
        setItems([...items]);
      }
    }else{
      setItems([{product:element,st:1}]);
    }
    console.log("Added: ",items);
  }

  function removeItem(element) {
    // let temp=items.filter((i) => i !== element)
    // setItems(temp);
    if(items.length>0){
      let objIndex = items.findIndex((obj => obj.product.id === element.id));
      items[objIndex].st=items[objIndex].st-1;
      if(items[objIndex].st<=0){
        items.splice(objIndex,1);
      }
      setItems([...items]);
    }
    console.log("Removed: ",items);
  }

  //Vprašaj za tale useEffect ali je vredu!!
  useEffect(() => {
    childToParent(items);
  }, [childToParent, items]);

  return (
    <div style={{ margin: 10 }}>
      <Card.Group>
        {elementi.map((element) => (
          <Card key={element.id}>
            <Card.Content>
              <Card.Header>{element.id}</Card.Header>
              <Card.Description>{element.value}</Card.Description>
              <Card.Meta>{element.cena}$</Card.Meta>
              <p className="right floated">Količina: {(items.findIndex((obj => obj.product.id === element.id))) === -1 ? 0 : items[items.findIndex((obj => obj.product.id === element.id))].st}</p>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  // disabled={items.some((i) => i === element)}
                  primary
                  color="green"
                  onClick={()=>addItem(element)}
                >
                  Dodaj v košarico
                </Button>
                <Button
                  disabled={!items.some((i) => i.product === element)}
                  color="red"
                  onClick={() => removeItem(element)}
                >
                  Odstrani
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default CreateCard;
