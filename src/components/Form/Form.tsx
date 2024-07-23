import { countries } from "../../data/countries";
import styles from "./Form.module.css"

export default function Form() {
    return (
        <form className={styles.form}>
            <div className={styles.field}>
                <label htmlFor="city">Ciudad:</label>
                <input type="text" name="city" id="city" placeholder="Ciudad..." />
            </div>
            <div className={styles.field}>
                <label htmlFor="city">País:</label>
                <select>
                    <option value="">--Seleccione un Pais</option>
                    {countries.map(country => (
                        <option
                            key={country.code}
                            value={country.code}
                        >{country.name}</option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Consultar Clima" />
        </form>
    );
}
