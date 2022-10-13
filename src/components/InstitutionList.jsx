import InstitutionCard from './InstitutionCard';

export default function InstitutionList({ institutions, setCurrentInstitution }) {
    function loaded() {
        const allInstitutions = institutions.map((institution) => {
            return (
                <InstitutionCard institution={institution} setCurrentInstitution={setCurrentInstitution} key={institution.ins_id} />
            );
        });

        return allInstitutions;
    }

    return (
        <>
            <div className="list institution-list">
                {institutions ? loaded() : <h2>Loading Institution list...</h2>}
            </div>
        </>
    );
}
