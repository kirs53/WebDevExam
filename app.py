from flask import Flask, render_template, request
from wtforms import Form, StringField, EmailField, DateField, SelectField, validators

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'  # Replace with a strong secret key

class FeedbackForm(Form):
  fio = StringField('ФИО', validators=[validators.DataRequired()])
  email = EmailField('Email', validators=[validators.DataRequired(), validators.Email()])
  date = DateField('Дата обращения', validators=[validators.DataRequired()])
  gender = SelectField('Пол', validators=[validators.DataRequired()], choices=[('male', 'Мужской'), ('female', 'Женский')])

@app.route('/', methods=['GET', 'POST'])
def index():
  form = FeedbackForm()

  if request.method == 'POST':
    if form.validate():
      # Handle valid form data (e.g., store in database, send email)
      print(f"Valid feedback received: {form.fio.data}, {form.email.data}, {form.date.data}, {form.gender.data}")
      return render_template('form.html', form=form, success=True)
    else:
      # Handle invalid form data (e.g., display error messages)
      return render_template('form.html', form=form, errors=form.errors)

  return render_template('form.html', form=form)

if __name__ == '__main__':
  app.run(debug=True)
