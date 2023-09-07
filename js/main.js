let user1Points = 0;
let user2Points = 0;



while (user2Points != 3 && user1Points != 3) {

    let user1Choice = prompt('User1, please make your choice (stone, scissors, paper)');
    while (user1Choice != 'stone' && user1Choice != 'scissors' && user1Choice != 'paper') {
        if (user1Choice != 'paper' && user1Choice != 'stone' && user1Choice != 'scissors') {
            alert('Please, type "stone", "scissors" or "paper"');
            user1Choice = prompt('User1, please make your choice (stone, scissors, paper)');
        }
    }

    let user2Choice = prompt('User2, please make your choice (stone, scissors, paper)');
    while (user2Choice != 'stone' && user2Choice != 'scissors' && user2Choice != 'paper') {
        if (user2Choice != 'paper' && user2Choice != 'stone' && user2Choice != 'scissors') {
            alert('Please, type "stone", "scissors" or "paper"');
            user2Choice = prompt('User2, please make your choice (stone, scissors, paper)');
        }
    }
    if (user1Choice === 'stone' && user2Choice === 'paper') {
        user2Points = user2Points + 1;
        alert(`User2 win round and have ${user2Points} points`);
    }
    if (user1Choice === 'stone' && user2Choice === 'stone') {
        alert('draw round!')
    }
    if (user1Choice === 'stone' && user2Choice === 'scissors') {
        user1Points = user1Points + 1;
        alert(`User1 win round and have ${user1Points} points`);
    }
    if (user1Choice === 'scissors' && user2Choice === 'paper') {
        user1Points = user1Points + 1;
        alert(`User1 win round and have ${user1Points} points`);
    }
    if (user1Choice === 'scissors' && user2Choice === 'scissors') {
        alert('draw round!');
    }
    if (user1Choice === 'scissors' && user2Choice === 'stone') {
        user2Points = user2Points + 1;
        alert(`User2 win round and have ${user2Points} points`);
    }
    if (user1Choice === 'paper' && user2Choice === 'paper') {
        alert('draw round!');
    }
    if (user1Choice === 'paper' && user2Choice === 'scissors') {
        user2Points = user2Points + 1;
        alert(`User2 win round and have ${user2Points} points`);
    }
    if (user1Choice === 'paper' && user2Choice === 'stone') {
        user1Points = user1Points + 1;
        alert(`User1 win round and have ${user1Points} points`);
    }


}
if (user1Points === 3) {
    alert(`User1 wins by score ${user1Points}:${user2Points}`);
}
if (user2Points === 3) {
    alert(`User2 wins by score ${user1Points}:${user2Points}`);
}