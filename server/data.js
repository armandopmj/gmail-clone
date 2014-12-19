// Q: Differance between exports and module.export?

exports.validUsers = { 
    'Armando Perez': 1, 
    'Tyron': 2
};

exports.UsersMessages = {
    1: {
        'Inbox': newMessages(5, 'Grettings', 'What is up??', ['Inbox'] ),
        'Sent': newMessages(4, "I'm Saying Hi", 'Hi', ['Sent'] ),
        'Trash': newMessages(3, "No Bueno", 'Darn', ['Trash']),
        'Spam': newMessages(3, "Annoying", 'sdjflj', ['Spam']),
        'Fav': newMessages( 2, 'Darn Good!', ':)', ['Fav'] ),
    },
    2: {
        'Inbox': newMessages(5, 'Grettings', 'What is up??', ['Inbox'] ),
        'Sent': newMessages(4, "I'm Saying Hi", 'Hi', ['Sent'] ),
        'Trash': newMessages(3, "No Bueno", 'Darn', ['Trash']),
        'Spam': newMessages(3, "Annoying", 'sdjflj', ['Spam']),
        'Fav': newMessages( 2, 'Darn Good!', ':)', ['Fav'] ),
    },    
};

function newMessages( n, sub, body, labels ) {
    results = [];

    for( var i = 0; i < n; i++ ){
        var message = {};
        message.subject = sub + '_' + i;
        message.body = 'Body number: ' + i + ' ' + body;
        message.data = new Date(Math.floor(Math.random()*1000000000));
        message.labels = labels;

        results.push(message);
    }
    return results;
}

