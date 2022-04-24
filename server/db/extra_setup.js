const applyExtraSetup = (sequelize) => {
    const { User, Week, Queen, EarnerType, Earner } = sequelize.models;

    // Users have several queens, queens can belong to multiple users
    User.belongsToMany(Queen, { through: 'UserQueens' });
    Queen.belongsToMany(User, { through: 'UserQueens' });

    // Earners are tied to the week where they occur
    Week.hasMany(Earner);
    Earner.belongsTo(Week);

    // Earners are categorized by their earnerType
    EarnerType.hasMany(Earner);
    Earner.belongsTo(EarnerType);

    // Each earner is tied to the queen who earns it
    Queen.hasMany(Earner);
    Earner.belongsTo(Queen);
}

module.exports = applyExtraSetup;