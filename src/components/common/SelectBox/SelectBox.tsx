import clsx from "clsx";
import { Heading, Text } from "..";
import classes from "./SelectBox.module.css";
import { FaAngleDown } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";

interface SelectBoxProps {
  label: string;
  selectedItem: string;
  logo?: string;
  onClick: () => void;
  className?: string;
  placeholder?: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  selectedItem,
  logo,
  onClick,
  className,
  placeholder = "Select an option",
}) => {
  const isSelected =
    selectedItem &&
    selectedItem !== placeholder &&
    selectedItem !== "Select Wallet";

  return (
    <button
      className={clsx(
        classes.wrapper,
        className,
        !isSelected && classes.unselected
      )}
      onClick={onClick}
    >
      <Heading sm regular primitive400>
        {label}
      </Heading>

      <div className={classes.selectedItem}>
        {logo && isSelected && (
          <img src={logo} alt="#" className={classes.logo} />
        )}
        {!isSelected && <FaWallet className={classes.walletIcon} />}
        <Text
          className={clsx(
            classes.itemText,
            !isSelected && classes.placeholderText
          )}
          primitive300={isSelected}
          primitive400={!isSelected}
          sm
          medium
        >
          {selectedItem || placeholder}
        </Text>
        <FaAngleDown
          className={clsx(classes.icon, !isSelected && classes.iconUnselected)}
        />
      </div>
    </button>
  );
};

export default SelectBox;
