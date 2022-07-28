const AFPS = {
    'Capital': 11.44,
    'Cuprum': 11.44,
    'Habitat': 11.27,
    'PlanVital': 11.16,
    'ProVida': 11.45,
    'Modelo': 10.58,
    'Uno': 10.69,
    'IPS': 18.84
};
const SIS = 1.86;
const SEGURO_CESANTIA = 3.0;
const CTA_AHORRO_INDEM = 1.11;
const SALUD = 7.0;
const SEGURO_ACCIDENTES = 0.93;
const DIAS_POR_MES = 30;


function calcula_sueldo_imponible(imposiciones, sueldo_liquido) {
    let total_impos = 0;
    for (const item in imposiciones) {
        total_impos += imposiciones[item]
    };

    const resultado = {
        "sueldo_imponible": total_impos + sueldo_liquido,
        "total_imposiciones": total_impos
    }
    return resultado
};

function calcula_imposiciones(afp_name, sueldo_liquido) {
    const imposiciones = {
        "sis": Math.round(sueldo_liquido * SIS / 100),
        "seg_cesan": Math.round(sueldo_liquido * SEGURO_CESANTIA / 100),
        "cta_ahorro": Math.round(sueldo_liquido * CTA_AHORRO_INDEM / 100),
        "afp_cot": Math.round(sueldo_liquido * AFPS[afp_name] / 100),
        "salud": Math.round(sueldo_liquido * SALUD / 100),
        "seg_acci": Math.round(sueldo_liquido * SEGURO_ACCIDENTES / 100)
    };
    return imposiciones
};

function calcula_sueldo_liquido_proporcional(sueldo_liquido, dias_trabajados = 30) {
    const sueldo_por_dia = sueldo_liquido / DIAS_POR_MES
    return Math.round(sueldo_por_dia * dias_trabajados)
};


function format_number(n) {
    // format number $1.000.000 to 1000000

    const replaced = n.replace(/\D/g, '');
    let num;

    if (replaced !== '') {
        num = Number(replaced);
    }

    return num

}

function format_currency(n) {
    // format number 1000000 to 1.000.000
    var neg = false
    if (n < 0) {
        neg = true
    }
    var str_number = n.toString();
    str_number = str_number.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    if (neg) {
        return '-$' + str_number
    }
    return '$' + str_number
}

function calcula_suma_columna(indice_col) {

    var grid = document.getElementById("detalles-remuneracion");
    var rows = grid.getElementsByTagName("TR");
    var amount = 0;
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("TD");
        var cell_value = format_number(cells[indice_col].innerHTML);
        if (cell_value == null) {
            cell_value = 0
        };
        amount += cell_value;
    }
    return amount
}

function suma_totales() {
    var grid = document.getElementById("detalles-remuneracion");
    var rows = grid.getElementsByTagName("TR");
    var haberes_amount = 0;
    var dctos_amount = 0;
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("TD");
        var haberes_value = format_number(cells[1].innerHTML)
        var dctos_value = format_number(cells[2].innerHTML)
        if (haberes_value == null) {
            haberes_value = 0
        }
        if (dctos_value == null) {
            dctos_value = 0
        }

        haberes_amount += haberes_value
        dctos_amount += dctos_value
    }

    const suma_totales = {
        "haberes": haberes_amount,
        "dctos": dctos_amount
    }

    return suma_totales
}

function formatNumberSueldoLiquido(n) {
    // format number 1000000 to 1.000.000
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}


function formatCurrencySueldoLiquido() {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.

    // get input value
    var input = document.getElementById("currency-field");

    // don't validate empty input
    if (input === "") { return; }

    input_val = formatNumber(input.value);
    input_val = "$" + input_val;

    // send updated string to input
    input.value = input_val
}

function modify_cells() {

    formatCurrencySueldoLiquido()
    document.getElementById('total_dctos').innerHTML = format_currency(0);
    document.getElementById('total_haberes').innerHTML = format_currency(0);

    const sueldo_str = document.getElementById("currency-field").value;
    const sueldo_num = format_number(sueldo_str);
    const dias_trabajados_str = document.getElementById("dias_trabajados").innerHTML;
    const dias_trabajados_num = format_number(dias_trabajados_str);
    const afp_name = document.getElementById("afp").value;
    const sueldo_liquido_real = calcula_sueldo_liquido_proporcional(sueldo_num, dias_trabajados_num);
    const imposiciones = calcula_imposiciones(afp_name, sueldo_liquido_real);
    const sueldo_imponible_y_total = calcula_sueldo_imponible(imposiciones, sueldo_liquido_real);
    const otros_dctos = document.getElementById('otros_dctos').innerHTML;

    var afp_message = afp_name + ' ' + '(' + AFPS[afp_name] + '%)';
    if (afp_name != 'IPS') {
        afp_message = 'AFP ' + afp_message
    };
    document.getElementById('cot_prev_name').innerHTML = afp_message
    document.getElementById('sueldo_base').innerHTML = format_currency(sueldo_imponible_y_total.sueldo_imponible);
    document.getElementById('afp_value').innerHTML = format_currency(imposiciones.afp_cot);
    document.getElementById('sis_value').innerHTML = format_currency(imposiciones.sis);
    document.getElementById('afc_value').innerHTML = format_currency(imposiciones.seg_cesan);
    document.getElementById('cta_ahorro_value').innerHTML = format_currency(imposiciones.cta_ahorro);
    document.getElementById('salud_value').innerHTML = format_currency(imposiciones.salud);
    document.getElementById('seg_acc_value').innerHTML = format_currency(imposiciones.seg_acci);
    document.getElementById('otros_dctos').innerHTML = format_currency(otros_dctos);

    const suma_tot = suma_totales();
    const sueldo_real = suma_tot.haberes - suma_tot.dctos;

    document.getElementById('total_dctos').innerHTML = format_currency(suma_tot.dctos);
    document.getElementById('total_haberes').innerHTML = format_currency(suma_tot.haberes);

    document.getElementById('sueldo_liquido_real').innerHTML = format_currency(sueldo_real);


}