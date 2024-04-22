import React from 'react';
import { EducationType } from '@/types/sections';
import { Badge, Card, CardBody } from 'reactstrap';

export default function EducationCard({
	schoolName,
	subHeader,
	duration,
	desc,
	gpa,
}: EducationType) {
	return (
		<Card className='shadow-lg--hover shadow mt-4'>
			<CardBody>
				<div className='d-flex px-3'>
					<div className='pl-4'>
						<h5 className='text-info'>{schoolName}</h5>
						<h6>{subHeader}</h6>
						<Badge color='info' className='mr-1'>
							{duration}
						</Badge>
						{gpa && (
							<Badge color='primary' className='mr-1'>
								GPA: {gpa}
							</Badge>
						)}
						<p className='description mt-3'>{desc}</p>
					</div>
				</div>
			</CardBody>
		</Card>
	);
}
