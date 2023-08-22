export{}

class Greetings {
  protected name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`${this.name}さん、こんにちは。`)
  }
}

class HelloWithMsg extends Greetings {
  msg: string = "";

  constructor(name: string, msg: string) {
    super(name);
    this.msg = msg;
  }

  sayHello() {
    super.sayHello();
    console.log(this.msg);
  }
}

const shiro = new HelloWithMsg("渡辺四郎", "いい天気ですね!");
shiro.sayHello();