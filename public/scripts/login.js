const errorBox = $('#error-box')
const inputEmailGroup = $('#inputEmailGroup')
const inputUsernameGroup = $('#inputUsernameGroup')
const btnEmail = $('#switchToEmail')
const btnUsername = $('#switchToUsername')

$(() => {
    errorBox.hide()
    inputUsernameGroup.hide()
    btnEmail.hide()

    btnUsername.click(() => {
        inputEmailGroup.hide()
        inputUsernameGroup.show()
        btnUsername.hide()
        btnEmail.show()
    })

    btnEmail.click(() => {
        inputEmailGroup.show()
        inputUsernameGroup.hide()
        btnUsername.show()
        btnEmail.hide()
    })
})