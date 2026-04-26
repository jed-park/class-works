const doctor = require('../model/doctor')

exports.post = async (req, res) => {
    const { name, age, address, salary, hospital } = req.body
    try {
        const newdoctor = new doctor({ name, age, address, salary, hospital })
        await newdoctor.save()

        res.status(201).json({ msg: "doctor created successfully" })

    } catch (error) {
        res.status(500).json({ msg: "error creating doctor", error: error })
    }
};

exports.get = async (req, res) => {
    try {
        const doctors = await doctor.find()
        res.status(200).json(doctors)
    } catch (error) {
        res.status(500).json({ msg: "error fetching", error: error });
    }
};

exports.update = async (req, res) => {
    try {
        const updatedoctor = await doctor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (!updatedoctor) { return res.status(404).json({ msg: "doctor not found" }) }

        res.status(200).json({ msg: "doctor updated fine" })

    } catch (error) {
        res.status(500).json({ msg: "error updating" })
    }
};

exports.remove = async (req, res) => {
    try {
        const removedoctor = await doctor.findByIdAndDelete(req.params.id);

        if (!removedoctor) { 
            return res.status(404).json({ msg: "doctor not found" }) 
        }
        res.status(200).json({ msg: "doctor removed" })

    } catch (error) {
        res.status(500).json({ msg: "error removing", error: error.message })
    }
};











