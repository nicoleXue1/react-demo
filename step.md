#1 组件 Game
#2 组件 square
#3 组件 board
#4 父传子:通过props传递数据 board-->square
#5 组件的交互功能 onClick={()=>{ alert('11111111111') }}
#6 this.state 私有属性的使用 记住点击的棋盘 setState 改变属性的值  
#7 将所有的square(棋子)数据 存储到 父组件里面
    1 向 DOM 内置元素 <button> 添加 onClick prop，让 React 开启对点击事件的监听。
    2 当 button 被点击时，React 会调用 Square 组件的 render() 方法中的 onClick 事件处理函数。
    3 事件处理函数触发了传入其中的 this.props.onClick() 方法。这个方法是由 Board 传递给 Square 的。
    4 由于 Board 把 onClick={() => this.handleClick(i)} 传递给了 Square，所以当 Square 中的事件处理函数触发时，其实就是触发的 Board 当中的 this.handleClick(i) 方法。
    5 现在我们还尚未定义 handleClick() 方法，所以代码还不能正常工作。如果此时点击 Square，你会在屏幕上看到红色的错误提示，提示内容为：“this.handleClick is not a function”。
#8 将square组件 转为函数组件
#9 计算谁获胜 并且展示
#10 获胜或者填满时 不再有render
#11 历史轨迹 在Game组件 初始化Game的state
#12 删除board的构造函数
#13 Game 历史轨迹处理  Game的子组件board的传值
