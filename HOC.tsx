import * as React from "react";
import { Subtract } from 'utility-types';

interface InjectedProps {

}

export const withState = <BaseProps extends InjectedProps>(
  _BaseComponent: React.ComponentType<BaseProps>
) => {

  const BaseComponent = _BaseComponent as React.ComponentType<InjectedProps>;
  type HocState = {

  }
  
  type HocProps = Subtract<BaseProps, InjectedProps> & {
  
  };

  return class Hoc extends React.Component<HocProps, HocState> {

    static displayName = `withState(${BaseComponent.name})`;
    static readonly WrappedComponent = BaseComponent;

    readonly state: HocState = {

    };

    render() {
      const {  } = this.props;
      const {  } = this.state;
      return (
        <BaseComponent

        />
      );
    }
  };
};
