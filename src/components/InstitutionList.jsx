import { Link } from 'react-router-dom';
import InstitutionCard from './InstitutionCard';

export default function InstitutionList({ institutions }) {
    function loaded() {
        const allInstitutions = institutions.map((institution) => {
            return <InstitutionCard institution={institution} key={institution.ins_id} />;
        });

        return allInstitutions;
    }

    return (
        <>
            <div className="list institution-list">
                {institutions ? loaded() : <h2>Loading Institution list...</h2>}
            </div>
            <Link to='/institutions/new'>
                <p className="create-link">Add New Institution</p>
            </Link>
        </>
    );
}
