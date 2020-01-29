const userService = require('../services/users.service');

const getUsers = async function(req, res) {
    try {
        res.status(200).send(await userService.getUsers());
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
};

const getUser = async function(req, res) {
    try {
        const id = req.params.id;
        const user = await userService.getUser(id);
        if (!user) {
            res.status(400).send(`user ${id} not found`);
        } else {
            res.status(200).send(user);
        }
    } catch(err) {
        res.status(err.statuscode).send(err.message);
    }
};

const postUser = async function (req, res) {
    try {
        const { user } = req.body;
        const { team_name } = req.body;
        const response = await userService.postUser(user, team_name);
        res.status(201).send(response);
    } catch(err) {
        res.status(500).send(err.message);
    }
};

const deleteUser = async function (req, res) {
    try {
        const id = req.params.id;
        await userService.deleteUser(id);
        res.status(204).send();
    } catch(err) {
        res.status(500).send(err.message);
    }
};

// const putUser = async function (req, res) {
//     try {
//         const id = req.params.id;
//         const user = req.body;
//         delete user.id;
//         await userService.putUser(id, user);
//         res.status(204).send();
//     } catch(err) {
//         res.status(err.statuscode).send(err.message);
//     }
// };

module.exports = {
    getUser,
    getUsers,
    postUser,
    deleteUser
    // putUser
}



