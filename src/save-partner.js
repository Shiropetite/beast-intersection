// export const partner = {
//   type: 'pnj',
//   top: {
//     nb: 50,
//     unit: 'px'
//   }, 
//   left: {
//     nb: 20,
//     unit: 'px'
//   },
//   size: 42
// }

// const lastMove = {
//   top: 0,
//   left: 40,
//   direction: 'd'
// }

export const move = (key) => {
  const step = 40;
  const last = {...lastMove};

  switch(key) {
    case 'z': 
      if(last.direction !== key) hero.top -= 20;
      hero.top -= step;
      lastMove.top = -step;
      lastMove.left = 0;
      lastMove.direction = 'z';
      break;
    case 'q':
      if(last.direction !== key) hero.left -= 20;
      hero.left -= step;
      lastMove.left = -step;
      lastMove.top = 0;
      lastMove.direction = 'q'
      break;
    case 's':
      if(last.direction !== key) hero.top += 20;
      hero.top += step;
      lastMove.top = step;
      lastMove.left = 0;
      lastMove.direction = 's'
      break;
    case 'd':
      if(last.direction !== key) hero.left += 20;
      hero.left += step;
      lastMove.left = step;
      lastMove.top = 0;
      lastMove.direction = 'd'
      break;
  }

  // if(partner) {
  //   if(last.direction !== key) {
  //     if(last.top > 0) last.top += 20;
  //     if(last.top < 0) last.top -= 20;
  //     if(last.left > 0) last.left += 20;
  //     if(last.left < 0) last.left -= 20;
      
  //     partner.top += last.top;
  //     partner.left += last.left;
  //   }
  //   else {
  //     partner.top += lastMove.top;
  //     partner.left += lastMove.left
  //   }
  //   update(partner)
  // }
  
}