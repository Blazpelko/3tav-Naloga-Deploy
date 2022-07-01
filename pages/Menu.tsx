import { useState } from "react";
import { Icon, Menu, Button, Label } from "semantic-ui-react";
import SubmitForm from "./form";
import CreateCard from "./Card";

function Gumb() {
  const [count, addCount] = useState(0);

  function decrement() {
    if (count > 0) {
      addCount(count - 1);
    }
  }
  return (
    <div>
      <h2>Enostaven seštevalnik:</h2>
      <Button onClick={() => addCount(count + 1)}>Dodaj</Button>
      <Button onClick={decrement}>Odstrani</Button>
      <Label as="a" basic pointing="left">
        {count}
      </Label>
    </div>
  );
}

const MainMenu = () => {
  const [activeItem, setActiveItem] = useState("izdelki");

  const handleItemClick = (e,data) => {
    setActiveItem(data.name);
    e.preventDefault();
  };

  const [data, setData] = useState([]);

  const childToParent = (childData) => {
    setData(childData);
  };

  //Preverimo katero komponento moramo naloziti
  let toRender;
  switch (activeItem) {
    case "izdelki":
      toRender = <CreateCard childToParent={childToParent} />;
      break;
    case "košarica":
      toRender = <SubmitForm selectedItems={data} />;
      break;
    case "drugo":
      toRender = <Gumb />;
      break;
    default: toRender = <Gumb />;
  }

  return (
    <div>
      <Menu pointing className="red inverted ">
        <Menu.Item
          name="izdelki"
          active={activeItem === "izdelki"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="košarica"
          active={activeItem === "košarica"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="drugo"
          active={activeItem === "drugo"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item name="košarica" onClick={handleItemClick}>
            <Label>
              <Icon size="big" name="shopping basket" />
              {data.length}
            </Label>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {toRender}
    </div>
  );
};

export default MainMenu;
