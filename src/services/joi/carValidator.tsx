import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().required().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages({'string.pattern.base':'Invalid name!'}),
    year: Joi.number().required().min(1990).max(2024).messages({'number.min':'Car is too old','number.max':'Production year is to high'}),
    price: Joi.number().required().min(0).max(1000000).messages({'number.min':'Car price can`t be negative','number.max':'Car price can`t be over 100.000'})
})