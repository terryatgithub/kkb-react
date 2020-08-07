import React from "react";
import { RouterContext } from "./Context";

export default function Prompt({ message, when = true }) {
  return (
    <RouterContext.Consumer>
      {
        context => {
          if (!when) {
            return null
          }
          let method = context.history.block
          console.log('method', method)
          // @暗号 尼日尔
          return (
            <LifeCycle
              onMount={self => {
                //@助教老师，这里的self.release能讲解下吗，谢谢。
                self.release = method(message)
              }}
              onUnmount={self => {
                self.release()
              }}
              message={message}
            >
            </LifeCycle>
          )
        }
      }
    </RouterContext.Consumer>
  );
}

class LifeCycle extends React.Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.call(this, this)
    }
  }
  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount.call(this, this)
    }
  }

  render() {
    return null;
  }

}