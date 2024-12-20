// Set global options for the Vex library
vex.defaultOptions.className = 'vex-theme-default';

const askButton = document.getElementById('ask-question-button');

// Add a click event listener to the button
askButton.addEventListener('click', () => {
    // Open a modal window with a form for entering a question
    vex.dialog.open({
        message: 'Ваш вопрос консультанту',

        // HTML markup for the input field for the question, with the 'required' attribute
        input: '<input name="question" type="text" placeholder="Введите вопрос" required>',

        // Configuration for buttons in the modal window
        buttons: [
            $.extend({}, vex.dialog.buttons.YES, {
                text: 'Отправить' // Changing the button text
            }),

            $.extend({}, vex.dialog.buttons.NO, {
                text: 'Закрыть'
            })
        ],

        // The callback function executed when the modal is closed
        callback: function(data) {
            if (data) {
                // If data is provided (the question was entered), open the loading modal
                const loader = vex.dialog.open({
                    message: 'Sending your question...',
                    buttons: [],
                    overlayClosesOnClick: false,
                    input: '<img src="/assets/skala.gif" alt="Loading..." style="width: 50px; height: 50px; display: block; margin: 0 auto;">'
                });

                // Set a 2-second delay to simulate the process of sending the question
                setTimeout(() => {
                    loader.close();
                }, 2000);
            }
        }
    });
});
