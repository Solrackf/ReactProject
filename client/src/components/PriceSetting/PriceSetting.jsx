import './PriceSetting.css'

export default function PriceSetting(props){
    return (
        <div className="container">
            <span className="title">Valor por Unidad de Medida</span>
            <span className="subtitle">Determina el valor de la unidad de medida de acuerdo al estrato socioeconómico</span>
            <div className="content">
                <table className="table">
                    <tr>
                        <th>Estrato</th>
                        <th>Valor por unidad</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>100</td>
                    </tr>
                </table>
                <div className="edit">
                    <span className="estrato">Estrato socioeconómico
                        <div className="estratos">
                            <label className="text"><input type="radio" name="estrato" value="1" />1</label>
                            <label className="text"><input type="radio" name="estrato" value="2" />2</label>
                            <label className="text"><input type="radio" name="estrato" value="3" />3</label>
                            <label className="text"><input type="radio" name="estrato" value="4" />4</label>
                            <label className="text"><input type="radio" name="estrato" value="5" />5</label>
                            <label className="text"><input type="radio" name="estrato" value="6" />6</label>
                        </div>
                    </span>
                    <span className="valor">Valor por unidad de medida
                        <input type="text" placeholder="$"/>
                    </span>
                    <input type="submit" value="Guardar" className="btnSave"/>
                </div>
            </div>
        </div>
    )
}