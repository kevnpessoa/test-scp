module.exports = (srv) => {

    srv.after('READ', 'Cities', each => {
        each.name += ' - MT'
    })
}