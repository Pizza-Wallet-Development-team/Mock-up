import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Avatar, Image, Typography } from "antd";
import { useChain } from "../../hooks/useChain";
import { useToken } from "../../hooks/useToken";
import { PizzaWalletCard } from "../reusable/PizzaWalletCard";

const { Text, Title } = Typography;

const MainText = styled("p")`
  color: ${({ color }: { color?: string; margin?: string; opacity?: string }) =>
    color};
  opacity: ${({ opacity }) => opacity};
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  margin: ${({ margin }) => margin};
`;

const SymbolText = styled("p")`
  color: #000000;
  font-family: "Rubik", sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
`;

const Text2 = styled("p")`
  color: #000000;
  font-family: "Rubik", sans-serif;
  font-size: 0.8125rem;
  line-height: 1.5rem;
`;

const Flex = styled("div")`
  display: flex;
  justify-content: start;
`;

interface ISelectChainTokenBtn {
  formType: string;
  handleClick: Dispatch<SetStateAction<string>>;
  setFormType?: Dispatch<SetStateAction<string>>;
  chainId: number;
  tokenAddress: string;
  chosenTokenBalance?: any;
}

export const SelectChainTokenBtn = ({
  formType,
  handleClick,
  setFormType,
  chainId,
  tokenAddress,
  chosenTokenBalance,
}: ISelectChainTokenBtn) => {
  const { chain, isLoading: isChainLoading } = useChain(chainId);
  const { token, isLoading: isTokenLoading } = useToken(chainId, tokenAddress);

  const handleCardClick = () => {
    handleClick("selectToken");
    setFormType && setFormType(formType);
  };

  const showTokenBalance = () => {
    return (
      chosenTokenBalance && (
        <div style={{ marginLeft: "40px", height: "30px" }}>
          {chosenTokenBalance.amount ? (
            <>
              <MainText>{chosenTokenBalance.amount}</MainText>
              <Text style={{ float: "right" }} type="secondary">
                $
                {Math.round(
                  Number(chosenTokenBalance.amount) *
                    Number(chosenTokenBalance.priceUSD),
                )}
              </Text>
            </>
          ) : null}
        </div>
      )
    );
  };

  return (
    <PizzaWalletCard height={"6.25rem"} hover={true} onClick={handleCardClick}>
      <MainText margin={"0.625rem 0 0.625rem 0.625rem"}>{formType}</MainText>
      <Flex>
        {token && chain ? (
          <Flex>
            <Avatar.Group>
              <Avatar
                style={{
                  marginLeft: "0.625rem",
                  color: "#f56a00",
                  backgroundColor: "#e8e8e8",
                }}
                src={<Image src={token.logoURI} style={{ width: 32 }} />}
              >
                {token.symbol[0]}
              </Avatar>
              <Avatar
                style={{
                  marginTop: "0.9375rem",
                  color: "#f56a00",
                  backgroundColor: "#e8e8e8",
                }}
                size={20}
                src={chain.logoURI}
              />
            </Avatar.Group>
            <div style={{ marginLeft: "0.625rem" }}>
              <SymbolText>{token.symbol}</SymbolText>
              <Text2>On {chain.name}</Text2>
            </div>
            {showTokenBalance()}
          </Flex>
        ) : (
          <>
            <Avatar.Group>
              <Avatar
                style={{
                  color: "#f56a00",
                  backgroundColor: "#e8e8e8",
                  marginLeft: "1.25rem",
                }}
              ></Avatar>
            </Avatar.Group>
            <MainText
              color={"rgb(116, 116, 116)"}
              opacity={"0.6"}
              margin={"0.6875rem 0 0.625rem 0.625rem"}
            >
              Select chain and token
            </MainText>
          </>
        )}
      </Flex>
    </PizzaWalletCard>
  );
};