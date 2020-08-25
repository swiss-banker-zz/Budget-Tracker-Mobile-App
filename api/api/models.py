from api import db
from os import path

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.String, nullable = False)
    last_name = db.Column(db.String, nullable = False)
    username = db.Column(db.String(15), nullable = False, unique = True)
    password = db.Column(db.String, nullable = False)
    email = db.Column(db.String) 
    public_id = db.Column(db.String, nullable = False)
    budget_items = db.relationship('BudgetItem', backref = 'user', lazy = False)


class BudgetItem(db.Model): 
    id = db.Column(db.Integer, primary_key = True)
    cost = db.Column(db.Integer) 
    name = db.Column(db.String)
    date = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    category = db.Column(db.String, default = 'Other')
    key = db.Column(db.String, nullable = False, unique = True)

    categories = [
        'subscriptions',
        'food',
        'housing',
        'entertainment',
        'medical',
        'other'
    ]

db.create_all()



