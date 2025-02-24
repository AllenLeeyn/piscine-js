const neuron = (arr) => {
    const obj = {};
    arr.forEach(e => {
        const exchange = e.split(' - ');
        const question = exchange[0].split(': ');
        const promptType = question[0].toLowerCase();
        const qVal = question[1];
        const qKey = question[1].toLowerCase().replaceAll(/[ !?]/g, (match) => match === ' ' ? '_' : '');

        const response = exchange[1].split(': ');
        const rKey = response[0].toLowerCase();
        const rVal = response[1];

        let curResponse = [];
        if (!obj[promptType]) {
            obj[promptType] = {}
        } 
        if (obj[promptType][qKey]) {
            curResponse = obj[promptType][qKey].responses;
        };
        if (promptType === 'questions'){
            obj[promptType][qKey] = {
                question: qVal,
                responses: [...curResponse,rVal]
            };
        } else {
            obj[promptType][qKey] = {
                order: qVal,
                responses: [...curResponse,rVal]
            };
        }
        
    });
    return obj;
};

/* console.log(neuron([
    'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
    'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
    'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
    'Orders: shutdown! - Response: Yes Sr!',
    'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
  ]))
   */
/*   // output
  {
    questions: {
      what_is_ounces: { question: 'what is ounces?', responses: [
          'Ounce, unit of weight in the avoirdupois system',
          'equal to 1/16 pound (437 1/2 grains)'
      ] },
      what_is_mud_dauber: { question: 'what is Mud dauber', responses: [
          'Mud dauber is a name commonly applied to a number of wasps'
      ] }
    },
    orders: {
      shutdown: { order: 'shutdown!', responses: ['Yes Sr!'] },
      quote_something: { order: 'Quote something!', responses: [
          'Pursue what catches your heart, not what catches your eyes.'
      ] }
    }
  } */