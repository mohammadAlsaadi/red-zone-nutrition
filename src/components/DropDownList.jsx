import styled from "styled-components";
import ColorIcon from "./ColorIcon";
import { useTranslation } from "react-i18next";

function DropDownList({
  withoutLabel,
  width,
  height,
  options,
  labelText,
  setter,
  value,
  additionIcon,
  fontSize,
}) {
  const { t } = useTranslation();

  return (
    <DropDownListContainer>
      {!withoutLabel && <p>{t(labelText)}</p>}
      <StyledSelect
        width={width}
        height={height}
        fontsize={fontSize}
        value={options[value]}
        onChange={(e) => setter(e.target.value)}
      >
        {options?.map((option) => (
          <StyledOption value={option} key={option}>
            {additionIcon ? (
              <StyledOptionWithAdditionData>
                <ColorIcon dataToConvert={option} />
                <span>{t(option)}</span>
              </StyledOptionWithAdditionData>
            ) : (
              t(option)
            )}
          </StyledOption>
        ))}
      </StyledSelect>
    </DropDownListContainer>
  );
}

export default DropDownList;

const StyledSelect = styled.select`
  min-width: ${(props) => (props.width ? props.width : "200px")};
  border: none;
  border-radius: 5px;
  height: ${(props) => (props.height ? props.height : "30px")};
  /* border-bottom: 2px solid var(--color-grey-200); */
  padding: 0px 20px;
  width: 100%;
  font-size: medium;
  background-color: var(--color-grey-0);
  font-size: ${(props) => (props.fontsize ? props.fontsize : "medium")};

  &:focus {
    outline: none;
  }
`;

const StyledOption = styled.option`
  border-radius: 0px;
  width: 100%;
  border: none;
  padding-left: 20px;
`;

const DropDownListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  padding: 10px 5px;
`;
const StyledOptionWithAdditionData = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;
