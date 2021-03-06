import classNames from "classnames";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type MessageBodyProps = HelpersProps;

export const MessageBody = forwardRefAs<MessageBodyProps>(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("message-body", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);

MessageBody.displayName = "Message.Body";
