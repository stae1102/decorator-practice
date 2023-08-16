import 'reflect-metadata';

const user = {
  firstName: '성태',
};

// 'user'에 `phone: '010-1234-5678'`이라는 metadata property를 추가한다.
Reflect.defineMetadata('phone', '010-1234-5678', user);
console.log(user);

// 'user.firstName'에 `lastName: '이'`이라는 metadata property를 추가한다.
Reflect.defineMetadata('lastName', '이', user, 'firstName');
console.log(user);

// 'user'에서 'phone'을 key로 가지는 metadata value를 가져온다.
const number = Reflect.getMetadata('phone', user);
console.log(number);

// 'user.firstName'에서 'lastName'을 key로 가지는 metadata value를 가져온다.
const lastName = Reflect.getMetadata('lastName', user, 'firstName');
console.log(lastName);
