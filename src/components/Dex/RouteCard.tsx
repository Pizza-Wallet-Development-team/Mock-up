import { Col, Row, Timeline, Typography } from "antd";
import BigNumber from "bignumber.js";
import { useMemo } from "react";
import { formatTokenAmount, parseSecondsAsTime } from "../../services/utils";
import { getChainById, Route as RouteType, Step } from "../../types";

interface RouteProps {
  route: RouteType;
  selected: boolean;
  onSelect: () => void;
}

const RouteCard = ({ route, selected, onSelect }: RouteProps) => {
  const tag: string | undefined = useMemo(() => {
    if (!route.tags || !route.tags.length) {
      return "GENERAL";
    } else if (route.tags.includes("RECOMMENDED")) {
      return "RECOMMENDED";
    } else if (route.tags[0] === "SAFEST") {
      return "SAFE";
    } else if (route.tags[0] === "CHEAPEST") {
      return "CHEAP";
    } else if (route.tags[0] === "FASTEST") {
      return "FAST";
    } else {
      return route.tags[0];
    }
  }, [route]);
  const parseStepShort = (step: Step) => {
    switch (step.type) {
      case "swap":
        return (
          <>
            Swap to{" "}
            {formatTokenAmount(step.action.toToken, step.estimate.toAmount)} via{" "}
            {step.toolDetails.name}
          </>
        );
      case "cross":
        return (
          <>
            Transfer to{" "}
            {formatTokenAmount(step.action.toToken, step.estimate.toAmount)} via{" "}
            {step.toolDetails.name}
          </>
        );
      default:
        // eslint-disable-next-line no-console
        console.error("invalid short step");
        return <></>;
    }
  };

  const parseStep = (step: Step) => {
    const { action, estimate } = step;
    switch (step.type) {
      case "swap":
        return {
          title: "Swap Tokens",
          description: `${formatTokenAmount(
            action.fromToken,
            estimate.fromAmount,
          )} for ${formatTokenAmount(action.toToken, estimate.toAmount)} via ${
            step.toolDetails.name
          }`,
        };
      case "cross":
        return {
          title: "Cross Chains",
          description: `${
            getChainById(action.fromChainId).name
          }: ${formatTokenAmount(action.fromToken, estimate.fromAmount)} to ${
            getChainById(action.toChainId).name
          }: ${formatTokenAmount(action.toToken, estimate.toAmount)} via ${
            step.toolDetails.name
          }`,
        };
      case "lifi":
        return {
          title: "LI.FI Contract",
          description: (
            <>
              Single transaction including:
              <br />
              <ol style={{ paddingLeft: 22 }}>
                {step.includedSteps.map(parseStepShort).map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ol>
            </>
          ),
        };
      default:
        return {
          title: "Invalid Step",
          description: "",
        };
    }
  };

  const aggregatedDuration = route.steps.reduce<number>(
    (duration, step) => duration + step.estimate?.executionDuration || 1,
    0,
  );

  const parsedDuration = parseSecondsAsTime(aggregatedDuration);
  return (
    <div
      className="swap-route"
      style={{
        padding: 24,
        paddingTop: 24,
        paddingBottom: 24,
        border: selected ? "1px solid #3f49e1" : "none",
      }}
      onClick={() => onSelect()}
    >
      <div style={{ float: "right" }}>
        {selected ? (
          <Typography.Text style={{ fontSize: 14, color: "#3f49e1" }}>
            selected
          </Typography.Text>
        ) : (
          <Typography.Text
            type="secondary"
            style={{ fontSize: 14, cursor: "pointer" }}
          >
            click to select
          </Typography.Text>
        )}
      </div>
      <Timeline className="progress-step-list">
        {!!tag && (
          <Typography.Title
            style={{ marginBottom: 24, fontSize: 14, color: "grey" }}
            level={5}
          >
            {tag}
          </Typography.Title>
        )}

        {route.steps.map((step) => {
          const { title, description } = parseStep(step);
          return (
            <Timeline.Item key={title}>
              <Typography.Title style={{ fontSize: 14 }} level={5}>
                {title}
              </Typography.Title>
              <Typography.Text type="secondary">{description}</Typography.Text>
            </Timeline.Item>
          );
        })}
      </Timeline>

      <div className="route-info">
        <div style={{ textAlign: "justify", width: "fit-content" }}>
          <b style={{ position: "relative" }}>
            Estimated token:
            {formatTokenAmount(route.toToken, route.toAmount) + //.replace(route.toToken.symbol, '')
              " "}
          </b>
          <br />
          <b>
            Estimated result:{" $"}
            {!new BigNumber(route.toAmountUSD).isZero()
              ? `${route.toAmountUSD} USD`
              : "~"}
          </b>
          <Row style={{ marginTop: 8 }} justify="space-between">
            <Col style={{ marginRight: 8 }} className="route-info-badge">
              {parsedDuration} min
            </Col>
            <Col className="route-info-badge">
              {route.gasCostUSD} USD Gas Cost
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
