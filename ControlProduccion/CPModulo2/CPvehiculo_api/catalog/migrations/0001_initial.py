import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fabricante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=120, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='EquipoProduccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modelo_equipo', models.CharField(max_length=120)),
                ('ano_fabricacion', models.IntegerField()),
                ('numero_serie', models.CharField(max_length=20, unique=True)),
                ('estado', models.CharField(blank=True, default='', max_length=60)),
                ('creado_en', models.DateTimeField(auto_now_add=True)),
                ('fabricante', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='equipos', to='catalog.fabricante')),
            ],
        ),
    ]
