function solubilityCalcSuccAprox(ks, coef_other, coef_excess, excess)
{
    s = 0.0;
    difference = 0.0;
    limit = 0.00001;
    
    d = ks/Math.pow(coef_other,coef_other);
    root_index = 1/coef_other;
    
    do {
        anterior = s;
        s = Math.pow(d/Math.pow(excess + s, coef_excess), root_index);
        difference = Math.abs(s - anterior);

        //console.log(s);
    } while (difference > limit);
    
    return s;
}