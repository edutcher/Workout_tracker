const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Exercise type needed',
        },
        name: {
            type: String,
            trim: true,
            required: 'Exercise name needed',
        },
        duration: {
            type: Number,
            required: 'Exercise duration needed',
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        },
    }, ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;